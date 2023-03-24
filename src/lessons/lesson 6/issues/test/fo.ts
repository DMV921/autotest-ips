
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'
//import { EmailsSettingsPage } from '../page-object/EmailsSettings.page'
import { LoginPage } from '../../../lesson 5/login/page-object/Login.page'
//import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"
import { NewRepositoryPage } from '../page-object/NewRespository.page'
import { createRepositoryModel, RepositoryModel } from '../model/repository.model'
import { repositoryData } from '../data/repository.data'
import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { issuesData } from '../data/issues.data'

const issues: IssuesModel = createIssuesModel(issuesData)

//for (let i  of Object.keys(issues)) {
  //  console.log(i)  
  //}
  
  
 // console.log()
  
  //let i = Object.keys(issues)[2]
  console.log(Object.keys(issues)[2])
  //console.log(Object.keys(issues))