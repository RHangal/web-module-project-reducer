# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* dispatch triggers the reducer function
* reducer triggers the switch case
* switch case triggers the ADD_One case
* state is spread out and total has 1 added to it
* updated state is rendered to the screen for user to see
...

* TotalDisplay shows the total plus 1.
