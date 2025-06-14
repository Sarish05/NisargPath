import JWT from "jsonwebtoken";

const secret = "$Black@Panther_CB98";

export function  createTokenForUser(user){
    const payload = {
        _id : user._id,
        email : user.email || "",
        name : user.name,
        number : user.number,
        role : user.role,
    }

    const token = JWT.sign(payload , secret);
    return token ;
}

export function validateToken(token){
    const payload = JWT.verify(token , secret);
    return payload;
}