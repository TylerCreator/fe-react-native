import { StackNavigator } from "react-navigation";
import EventScreen from "./eventScreen";
import EventsScreen from "./eventsScreen";

const EventsNavigator = StackNavigator(
  {
    Events: {
      screen: EventsScreen,
    },
    Event: {
      screen: EventScreen,
    },
  },
  {
    initialRouteName: "Events",
    cardStyle: { backgroundColor: "white" },
  }
);

export default EventsNavigator;