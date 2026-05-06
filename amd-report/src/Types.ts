export const enum cats {
    about,
    role,
    goals,
    second
}

export const CatTitleMap: Record<cats, string> = {
    [cats.about]: "About AMD",
    [cats.role]: "My Role",
    [cats.goals]: "My Goals",
    [cats.second]: "Second Term",
}