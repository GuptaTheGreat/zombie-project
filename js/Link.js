class Link{
    constructor(bodyA,bodyB){
        var lastlink = bodyA.body.bodies.lenght - 2;
        this.link = Constraint.create({bodyA: bodyA.body.bodies[lastlink],
                                        pointA: {x: 0,y: 0},
                                        bodyB: boodyB.body,
                                        pointB: {x: 0,y: 0},
                                        lenght: 10,
                                        stiffness: 0.8});
        World.add(world,this.link);
    }
}