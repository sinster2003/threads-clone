// custom chakra ui themes
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

/* custom dark / light mode using global styles */
const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800","whiteAlpha.900")(props),
            bg: mode("#ffffffe6","#14171c")(props),
        }
    })
}

/* configure the theme */
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true // for user enhancement
};

/* adding custom colors */
const colors = {
    gray: {
        light: "#616161",
        dark: "#1e1e1e"
    }
}

const theme = extendTheme({ styles, config, colors });

export default theme;