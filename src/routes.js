import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Inicio from "./pages/Inicio";
import TabelaPeriodica from "./pages/TabelaPeriodica";
import MassaMolar from "./pages/MassaMolar";
import PropriedadesPeriodicas from "./pages/PropriedadesPeriodicas";

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Inicio" component={Inicio} />
                <AppStack.Screen name="MassaMolar" component={MassaMolar} />
                <AppStack.Screen name="TabelaPeriodica" component={TabelaPeriodica} />
                <AppStack.Screen name="PropriedadesPeriodicas" component={PropriedadesPeriodicas} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}