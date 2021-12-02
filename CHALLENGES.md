## Prerequisites

* this repository
* typescript

> If needed, you can install typescript globally, run `yarn global add typescript`

## Challenges

> To begin checkout branch `challenge-1`

> If you want to start a challenge with a fresh codebase -> `git checkout challenge-<number>`

### Challenge #1

* Call the dispatcher using an event and add the correct payload

### Challenge #2

* Implement the dispatcher logic for the action `add`
  * Remember: a dispatcher has to be `pure` and __must not__ have any side effects
  
### Challenge #3

* Add a new type `Item` which is the same as `Book`, but has
  * an additional property `quantity`
  * bonus points if you can drop the `pages` property from `Book` in the same line!
* update/refactor the shoppinglist component to display the quantity of each book in the list


### Challenge #4

* Add a total price display to the shoppinglist component which shows the total price of all products x price x quantity 
