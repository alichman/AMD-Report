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

export const CatHeaderMap: Record<cats, string> = {
    [cats.about]: "About AMD",
    [cats.role]: "My role in DAL",
    [cats.goals]: "My goals for the first term",
    [cats.second]: "My aspirations for the second term",
}