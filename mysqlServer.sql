CREATE DATABASE IF NOT EXISTS test;
USE test;
DELIMITER //
CREATE PROCEDURE getString(
  IN `input` VARCHAR(50),
  OUT `output` VARCHAR(50)
)
COMMENT 'retrieves aggregated airplane information'
BEGIN
    SET `output` = `input`; 
END//
DELIMITER ;