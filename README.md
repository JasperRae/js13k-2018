# js13k-2018 Notes

Bugs
---

* Currently when the game resets, the bars start to deplete again immediately.
* I'm not *entirely* sure how objects work yet, so right now I just have a template while I figure it out.

Job Idea Tree
---

*currently trying to balance things like shift length vs pay*

    type: "Dining",
    title: "Dishwasher",
    pay: "11.25",
    shift: "8",
    expReq: "0"

    type: "Dining",
    title: "Prep Cook",
    pay: "12.25",
    shift: "8",
    expReq: "15"

    type: "Dining",
    title: "Line Cook",
    pay: "14.00",
    shift: "8",
    expReq: "25"

    type: "Dining",
    title: "Sous Chef",
    pay: "18.00",
    shift: "8",
    expReq: "50"

    type: "Dining",
    title: "Head Chef",
    pay: "23.00",
    shift: "8",
    expReq: "100"

    * Cashier - $11.25/hr 

    * Lab Assistant - $11.25/hr 

    * Receptionist - $11.25/hr 

    * Delivery Person - $11.25/hr
        * Team Leader - $12.25/hr 
            * Regional Delivery Manager - $20.00/hr 