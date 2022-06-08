import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import SingIn from "./pages/SingIn";
import Search from "./pages/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#009393",
          borderTopColor: "transparent",

        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={!focused ? "home-outline" : "home"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={!focused ? "search-outline" : "search"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={!focused ? "person-outline" : "person-sharp"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="SingIn" component={SingIn} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Routes} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
