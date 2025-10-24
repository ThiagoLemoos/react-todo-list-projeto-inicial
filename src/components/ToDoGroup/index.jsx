import { SubHeading } from "../SubHeading"
import { ToDoItem } from "../ToDoItem"
import { ToDoList } from "../ToDoList"
import React from "react"


export function ToDoGroup({ items, heading }) {
    return (
        <React.Fragment>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map(function (t) {
                    return <ToDoItem
                        key={t.id}
                        item={t}
                    />
                })}
            </ToDoList>
        </React.Fragment>
    )
}