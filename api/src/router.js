import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
    // #swagger.description = "Get All Users"
    /* #swagger.responses[200] = {
        description: "Array of users"
        schema: [
            { id: 1, username: "Admin"},
            { id: 2, username: "User"}
        ]
    }*/
    return res.status(200).send('{}');
    /* #swagger.responses[402] = {
        descriptin: "Auth Error"
    }*/
});


export default router;