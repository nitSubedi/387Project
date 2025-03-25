-- Uncomment the following three lines of code after sourcing file for the first time

-- ALTER TABLE enrollment DROP FOREIGN KEY enrollment_course;
-- ALTER TABLE enrollment DROP FOREIGN KEY enrollment_student;
-- DROP TABLE course, enrollment, student;

-- tables

-- Table: course
CREATE TABLE course (
    course_id varchar(10)  NOT NULL,
    course_title varchar(100)  NOT NULL,
    CONSTRAINT course_pk PRIMARY KEY (course_id)
);

-- Table: enrollment
CREATE TABLE enrollment (
    student_id int  NOT NULL,
    course_id varchar(10)  NOT NULL,
    grade varchar(15)  NULL,
    CONSTRAINT enrollment_pk PRIMARY KEY (student_id,course_id)
);

-- Table: student
CREATE TABLE student (
    student_id int  NOT NULL AUTO_INCREMENT,
    student_lname varchar(25)  NOT NULL,
    student_fname varchar(25)  NOT NULL,
    classification varchar(25)  NOT NULL,
    degree_program varchar(50)  NOT NULL,
    CONSTRAINT student_pk PRIMARY KEY (student_id)
);

-- foreign keys

-- Reference: enrollment_course (table: enrollment)
ALTER TABLE enrollment ADD CONSTRAINT enrollment_course FOREIGN KEY enrollment_course (course_id)
    REFERENCES course (course_id);

-- Reference: enrollment_student (table: enrollment)
ALTER TABLE enrollment ADD CONSTRAINT enrollment_student FOREIGN KEY enrollment_student (student_id)
    REFERENCES student (student_id);

-- Inserting Records 

INSERT INTO course VALUES('CSCI 191','Office Applications');  
INSERT INTO course VALUES('CSCI 203','Introduction to Computational Media');  
INSERT INTO course VALUES('CSCI 256','Programming in Python');   
INSERT INTO course VALUES('CSCI 343','Fundamentals of Data Science');  
INSERT INTO course VALUES('CSCI 356','Data Structures in Python');  
INSERT INTO course VALUES('CSCI 387','Software Design and Development');  
INSERT INTO course VALUES('CSCI 475','Introduction to Database Systems');  
INSERT INTO course VALUES('CSCI 491','Special Topics in Computer Security');  

INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Abdurakhmonov','Temur','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Ahmed','Abdul Wahab','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Anderson','Anthony','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Bland','Delaney','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Boyd','Paige','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Brown','Ken','Senior','B.A. in Classics');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Cao','Ivan','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Carrington','William','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Dew','George','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Freeland','Connor','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Furr','Campbell','Senior','Independent Study');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Geron','Kurt','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Goyibberdiev','Khusanboy','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Greene','Kenneth','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Gregory','Will','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Heffner','Gabe','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Ignatius','Andrew','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('James','Earnest','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Jimenez','Daniel','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Jones','Andy','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Jurgenson','Joshua','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Kacarka','Brayden','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Kelchner','Jonathan','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Kilichov','Azizbek','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Lee','Anna','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Malouf','Chambers','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Mehta','Kashama','Sophomore','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nguyen','Andrew','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nguyen','Duy','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nguyen','Hannah','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nguyen','Hung','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nguyen','Matthew','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Nogueira','Robert','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Pandit','Hrijan','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Pankey','Caroline','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Perera','Yahani','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Plunk','Jenna','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Ross','Compton','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Scott','Ann','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Stoddard','Grant','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Subedi','Nitesh','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Tra','Michelle','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Tran','Tyler','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Turner','Carson','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Van','Daniel','Senior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Watson','Josh','Junior','B.S.C.S. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('White','Daniel','Junior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Williams','Tywon','Senior','B.A. in Computer Science');
INSERT INTO student(student_lname,student_fname,classification,degree_program) VALUES('Zhou','Youkai','Senior','B.S.C.S. in Computer Science');

INSERT INTO enrollment VALUES(1,'CSCI 191','A');
INSERT INTO enrollment VALUES(6,'CSCI 191','A');
INSERT INTO enrollment VALUES(9,'CSCI 191','A');
INSERT INTO enrollment VALUES(17,'CSCI 191','A');
INSERT INTO enrollment VALUES(41,'CSCI 256','A');
INSERT INTO enrollment VALUES(26,'CSCI 256','A');
INSERT INTO enrollment VALUES(19,'CSCI 256','A');
INSERT INTO enrollment VALUES(27,'CSCI 256','A');

INSERT INTO enrollment(student_id,course_id) VALUES(31,'CSCI 191');
INSERT INTO enrollment(student_id,course_id) VALUES(11,'CSCI 191');
INSERT INTO enrollment(student_id,course_id) VALUES(3,'CSCI 256');
INSERT INTO enrollment(student_id,course_id) VALUES(14,'CSCI 256');
INSERT INTO enrollment(student_id,course_id) VALUES(15,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(21,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(43,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(23,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(12,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(18,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(19,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(24,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(26,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(22,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(33,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(44,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(28,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(16,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(13,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(34,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(41,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(9,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(11,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(17,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(29,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(27,'CSCI 387');
INSERT INTO enrollment(student_id,course_id) VALUES(39,'CSCI 387');