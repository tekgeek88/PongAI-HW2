class Entity {
    constructor(game, x, y, width, height, xVelocity, yVelocity) {
        this.x = 0;
        this.y = 0;
        // Dimensions
        this.width = 0;
        this.height = 0;
        // All entities can have speed and direction
        this.xVelocity = 0;
        this.yVelocity = 0;
    }
    update() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
    // Returns true if the entity intersects the given entity
    intersect(other) {
        return this.y + this.height > other.y
            && this.y < other.y + other.height
            && this.x + this.width > other.x
            && this.x < other.x + other.width;
    }
}




