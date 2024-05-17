-- backend\prisma\migrations\20240515224401_init\migration.sql

-- CreateTable
CREATE TABLE `appointments` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `license` VARCHAR(10) NOT NULL,
    `scheduledAt` DATETIME(3) NOT NULL,
    `type` ENUM('SIMPLE', 'COMPLETE') NOT NULL,
    `confirmed` BOOLEAN NOT NULL DEFAULT false,
    `canceled` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
