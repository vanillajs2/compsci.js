/** QuickFind is a simple but less optimal implementation of a UnionFind data structure. */
export class QuickFind {
    /**
     * @constructs QuickFind
     * @param {*[]} [values] an array of verticies to add to the set
     */
    constructor(values?: any[]);
    /**
     * The identity array
     * @private
     * @type {Map<any, any>}
     */
    private verticies;
    /**
     * The number of sets
     * @type {Number}
     */
    count: Number;
    /**
     * Find the id for a value
     *
     * @param {*} value the value to lookup
     * @returns {Number} the identity of the set containing the item
     */
    find(value: any): number;
    /**
     * Are the 2 verticies connected?
     *
     * @param {*} valueA the first vertex to compare
     * @param {*} valueB the second vertex to compare
     * @returns {boolean} true if the verticies are connected, false if not
     */
    connected(valueA: any, valueB: any): boolean;
    /**
     * Join the verticies if not already in the same set
     *
     * @param {*} valueA the first vertex to connect
     * @param {*} valueB the second vertex to connect
     */
    union(valueA: any, valueB: any): void;
    /**
     * Returns a 2D array of the unique sets and the values in those sets
     *
     * @returns [][] a 2D array containing the disjoint sets
     */
    sets(): any[];
}
