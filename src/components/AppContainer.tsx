import { Box, Container } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box mx="4" safeArea>
      {children}
    </Box>
  );
};

export default AppContainer;
