import React, { Component, useState } from "react";

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


let count = 0;
let arr = [];
let trueTitle = [];
let trueStart = [];
let trueEnd = [];
let trueDesc = [];
let more = 0;

const handleChange = (e) => {
    console.log(e.target.value);
}

const cachedEvents = localStorage.getItem("cachedEvents");

class GoOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: trueTitle,
            start: trueStart,
            end: trueEnd,
            desc: trueDesc
        }
    }

    componentDidMount() {
        this.getCachedEvents();
    }

    getCachedEvents() {

        console.log("isToggleOn search", JSON.parse(cachedEvents));
        console.log("isToggleOn search", JSON.stringify(JSON.parse(cachedEvents)));
        const PcachedEvents = JSON.stringify(JSON.parse(cachedEvents));
        var PcachedEventsToArray = PcachedEvents.split("},");
        count = PcachedEventsToArray.length;
        console.log("count", count);
        arr = new Array(count);
        if(more != count){
        for (var i = 0; i < count; i++) {
            arr[i] = JSON.parse(cachedEvents);
            if (arr[i][i].isToggleOn == true) {
                    trueTitle.push(arr[i][i].title)
                    trueStart.push(arr[i][i].start)
                    trueEnd.push(arr[i][i].end)
                    trueDesc.push(arr[i][i].desc)
                    }
                    more++;
                    console.log("more", more);
            }
        }
    }

    render() {
        return (
            <TableRow>
                <TableCell>{trueTitle}</TableCell>
                <TableCell>{trueStart}</TableCell>
                <TableCell>{trueEnd}</TableCell>
                <TableCell>{trueDesc}</TableCell>
            </TableRow>
        )
    }
}

export default GoOut;