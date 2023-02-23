export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined    ------> Screen without params
      OrderWithLot: {     ------> Screen with params
        NameOfProduct: string
        QtdRequisitada: number
        QtdDisponivel: number
      }
    }
  }
}
