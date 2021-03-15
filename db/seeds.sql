USE events_db;

CREATE TABLE members (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
email VARCHAR(40) NOT NULL,
phone INTEGER (12) NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM events_db.members;
INSERT INTO members (name, email, phone)
VALUES ("Jane Smith", "janesmith@pta.com", 555-555-1234), 
("Mark Brown", "markbrown@pta.com", 555-545-1236),
("Diane McCall", "dianemccall@pta.com", 555-535-1238),
("Michele Webber", "michelewebber@pta.com", 555-525-1240),
("Keith Gray", "keithgray@pta.com", 555-515-1242);


USE events_db;

CREATE TABLE scheduled_events (
title VARCHAR(100) NOT NULL,
category VARCHAR(50),
date INTEGER(12),
description VARCHAR(240),
vendors VARCHAR(500),
team_leader VARCHAR(50),
needs_attention BOOLEAN NULL
);

SELECT * FROM events_db.scheduled_events;
INSERT INTO scheduled_events (name, category, date, description, vendors)
VALUES ("Car Wash Fundraiser", "Fundraiser", 03302021, "Final fundraiser for 8th grade formal", "N/A"),
("8th Grade Formal", "Social", 04242021, "Semi-Formal Dance for 8th Graders", "Carlo's Crazy Cotton Candy, Perfect Image Photo Booth, Frankie's Pizza"),
("Field Day", "Extracurricular", 05152021, "Outdoor field day for all students", "Carlo's Crazy Cotton Candy, Frankie's Pizza, Obstacle Course 4u, Neds Game Truck");


USE events_db;

CREATE TABLE roles (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM events_db.roles;
INSERT INTO roles (name)
VALUES ("Auditor"),
("Treasurer"),
("Volunteer"),
("Vendor Services"),
("Fundraising Coordinator"),
("Membership Coordinator"),
("Communications");


USE events_db;

CREATE TABLE vendors (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
phone INTEGER(15),
PRIMARY KEY (id)
);

SELECT * FROM events_db.vendors;
INSERT INTO vendors (name, phone)
VALUES ("Carlo's Crazy Cotton Candy", 555-034-5678),
("Perfect Image Photo Booth", 555-667-3256),
("Frankie's Pizza", 555-616-5683),
("Obstacle Course 4u", 555-761-654-8734),
("Neds Game Truck", 555-672-5631);