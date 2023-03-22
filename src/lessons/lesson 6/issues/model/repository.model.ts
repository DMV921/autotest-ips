import { RepositoryData } from "../data/repository.data"

export type RepositoryModel = {
    repositoryname: string
}

export function createRepositoryModel(data: RepositoryData): RepositoryModel {
    return {
        repositoryname: data.repositoryname
    }
}

