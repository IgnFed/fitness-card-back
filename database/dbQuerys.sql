CREATE DATABASE IF NOT EXISTS fitness_cards;
USE fitness_cards;
CREATE TABLE IF NOT EXISTS fitness_card(
  id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300) NOT NULL,
  color VARCHAR(50),
  background VARCHAR(300),
  img VARCHAR(255)
);

INSERT INTO 
  fitness_card
SET ?
  (id =5,
  title ="TITLE 5",
  description= "This is a card description 5",
  color= "#B9E",
  background= "C2E",
  img= NULL
  );
SELECT * FROM fitness_card;
DELETE * FROM fitness_card WHERE id=3;

UPDATE 