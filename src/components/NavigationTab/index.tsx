import React, { ReactNode, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Resumo from './components/Resumo';

import { Container } from './styles';

interface TabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {
 children, value, index, ...other
} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavigationTab: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Resumo" {...a11yProps(0)} />
          <Tab label="Movimentações" {...a11yProps(1)} />
          <Tab label="Posição" {...a11yProps(2)} />
          <Tab
            className="tabLastItem"
            label="Monte Sua Carteira"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Resumo />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Essa é a aba Movimentações! :)
      </TabPanel>

      <TabPanel value={value} index={2}>
        Essa é a aba Posição! :)
      </TabPanel>

      <TabPanel value={value} index={3}>
        Essa é a aba Monte sua carteira! :)
      </TabPanel>
    </Container>
  );
};

export default NavigationTab;
