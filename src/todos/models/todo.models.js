/**
 *  author: Nacho Rodríguez
 */
import { v4 as uuid } from 'uuid'

export class Todo {
    /**
     * 
     * @param {String} description
     */
    constructor(description) {
        this.id = uuid()
        this.description = description
        this.done = false
        this.createrAt = new Date()
    }
}