# Learning-Environment-Wizard-Bachelor-thesis
This repository contains my Bachelor thesis and all corresponding documents. 
Bianca Lien (6306494), Goethe-Universität 2020, s0580779@stud.uni-frankfurt.de
tested on Google Chrome


Admin login info (log in on the "Learning Environment Wizard" to download feedback data):
username: admin
password: adminpassword

In order to use the website, you will need one database with three tables with the following names (and column names): 

(1) feedback_db (location, time, task, collaboration, attributes, satisfaction, recommend, rating, tipps)

This table contains the reviews from users. All columns are char except for "rating" which is int. "attributes" and "tipps" can be NULL. 

(2) locations_db (location_name, address, opening_hours, tables, food_allowed, food_offered, restrooms, tech, campus)

This table contains data on specific locations and must be entered manually by the admin. All columns are char. "tech" and "campus" can be NULL. 

(3) users_db (id, username, password, preference)

This table contains the login info of registered users as well as their saved preference. All columns are char except for "id" which is int. The preference can be NULL. 


Enter the database connection info (host, username, password, database name) in docs/config.php to connect the website to the database. 
