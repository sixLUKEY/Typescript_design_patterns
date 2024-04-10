// A column that is used in a row

import FlyweightFactory from "./flyweight-factory";

/**
 *  @description the columns are contexts. They will share the Flyweights via the FlyweightsFactory
 *  
 */
export default class Column {
    data = ''
    width = 10
    justify = 0

    getData(): string {
        
    }
}