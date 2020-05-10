export const ActionConsts = {
  App: {
    ResetReducer: 'App_ResetReducer',
    SetReducer: 'App_SetReducer',
  },
  Event: {
    AddEvent: 'Event_AddEvent',
    UpdateEvent: 'Event_UpdateEvent',
    AddStackToEvent: 'Event_AddStackToEvent',
    AddNewsToEvent: 'Event_AddNewsToEvent',
  },
  Stack: {
    AddStack: 'Stack_AddStack',
    UpdateStack: 'Stack_UpdateStack',
    AddNewsToStack: 'Stack_AddNewsToStack',
  },
  News: {
    AddNews: 'News_AddNews',
    UpdateNews: 'News_UpdateNews',
  },
  Client: {
    AddClient: 'Client_AddClient',
    UpdateClient: 'Client_UpdateClient',
    SetLoggedInClient: 'Client_SetLoggedInClient',
  },
  Loading: {
    BeginLoading: 'Loading_BeginLoading',
    FinishLoading: 'Loading_FinishLoading',
  },
};