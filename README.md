## Screenshot

## State to be tracked

-   player HP
-   goblin HP [{ name, hp }]
-   how many goblins defeated

## HTML Setup

-   add new goblins to the list with: form, input, button
-   div to hold each goblin (can be changed/added)
-   div to hold the list of goblins
-   div # defeated goblins
-   div to show player hp

## Functions

-   renderGoblin(goblin): return a new DOM element
    -   (PURE)
-   displayGoblins():
    -   Every time state changes:
        -   clears DOM
        -   appends goblin data to goblin list DOM node
        -   mutates the DOM
        -   (IMPURE)

## Events

-   user clicks a goblin
    -   update that goblin in array
        -   randomly decide: did I hit or miss? Did goblin hit or miss?
            -   if I hit, goblin hp goes down
            -   if goblin hits, my hp goes down
        -   display with updated state
-   user adds a new goblin
    -   get the name from the form
    -   make new goblin object
        -   contains name & random hp
    -   add new goblin to display
