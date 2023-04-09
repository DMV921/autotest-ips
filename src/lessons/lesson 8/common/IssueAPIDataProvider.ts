type CreateIssueRequest = {
    title: string | number,
    body?: string,
    labels?: string[],
    assignees?: string[]
}

export {
    CreateIssueRequest
}