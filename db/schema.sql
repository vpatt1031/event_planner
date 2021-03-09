DROP DATABASE IF EXISTS events_db;

CREATE DATABASE events_db;

USE events_db;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(300) NOT NULL,
  delete_event BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);


