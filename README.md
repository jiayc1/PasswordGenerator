# PasswordGenerator
## Acceptance Criterias 

1) GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

In order to be able to generate a password when I am presented with a series of prompts for password criteria - I will first have to create prompts function that will allow me to have a pop up with OK and Cancel button and a textbox. 



2) WHEN prompted for password criteria
THEN I select which criteria to include in the password

The criteria added is that the length must be in number form else it will give the user an alert to enter in a number for the length of the password. 




3)WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

Added two IF statements to set the minimum to at least 8 and no more than 128 characters for the user. 


4)WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

This prompts to show or ask the user if they want lowercase, uppercase, numeric, and/or special characters. In order to write this I will use the confirm statement. 


5) WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

In order to do so - I have added false statements into the code to make sure that at least one character type has to be selected else it would not work. 


6) WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

Create a function to generate password when all selected criterias has been met. 

7)WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

When I click a button, it called writepassword function which calls generating password. 



