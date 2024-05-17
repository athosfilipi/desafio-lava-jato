import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const isValidLicensePlate = (plate: string): boolean =>
  /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(plate);

export const createAppointment = async (req: Request, res: Response) => {
  const { license, scheduledAt, type } = req.body;

  if (!isValidLicensePlate(license)) {
    return res.status(400).json({
      message: "Invalid license plate format. Expected format: ABC1D34",
    });
  }

  const appointmentDate = new Date(new Date(scheduledAt).getTime());
  const duration = type === "COMPLETE" ? 45 : 30;
  const endAt = new Date(appointmentDate.getTime() + duration * 60000);

  try {
    const overlappingAppointments = await prisma.appointment.findMany({
      where: {
        OR: [
          {
            scheduledAt: {
              lte: appointmentDate,
            },
            endAt: {
              gte: appointmentDate,
            },
          },
          {
            scheduledAt: {
              lte: endAt,
            },
            endAt: {
              gte: endAt,
            },
          },
        ],
      },
    });

    if (overlappingAppointments.length > 0) {
      return res.status(400).json({
        message: "Appointment time overlaps with another appointment.",
      });
    }

    const appointment = await prisma.appointment.create({
      data: {
        license,
        scheduledAt: appointmentDate.toISOString(),
        endAt: endAt.toISOString(),
        type,
        confirmed: false,
        canceled: false,
      },
    });

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const listAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const confirmAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await prisma.appointment.update({
      where: { id: Number(id) },
      data: { confirmed: true },
    });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.appointment.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNextAppointment = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const gmtMinusThree = new Date(now.getTime()).toISOString();

    const nextAppointment = await prisma.appointment.findFirst({
      where: {
        scheduledAt: {
          gte: gmtMinusThree,
        },
        canceled: false,
        confirmed: false,
      },
      orderBy: {
        scheduledAt: "asc",
      },
    });

    console.log("► Next Appointment:", nextAppointment);

    if (!nextAppointment) {
      return res
        .status(202)
        .json({ message: "No upcoming appointments found" });
    }

    res.json(nextAppointment);
  } catch (error) {
    console.error("► Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
