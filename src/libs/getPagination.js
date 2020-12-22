
export const getPaginationTeams = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit: 0;
    return {limit, offset}
}


export const getPaginationDrivers = (page, size) => {
    const limit = size ? +size : 20;
    const offset = page ? page * limit: 0;
    return {limit, offset}
}