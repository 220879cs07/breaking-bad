import { Box, Tab, Tabs } from '@mui/material';
import history from 'app/routes/history';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TabPanel from './TabPanel/TabPanel';
import { UITabsProps } from './types';

import './UITabs.sass';

const UITabs: React.FC<UITabsProps> = ({ tabs, replaceUrl = true, onChange, ...rest }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].tab);
  const { search, pathname } = useLocation();

  useEffect(() => {
    if (!replaceUrl) return;
    const parsedSearch = qs.parse(search, { ignoreQueryPrefix: true });

    if (parsedSearch.tab && activeTab !== parsedSearch.tab) {
      setActiveTab(parsedSearch.tab as string);
    }
  }, [search]);

  const onChangeHandler: UITabsProps['onChange'] = (event, newValue) => {
    setActiveTab(newValue);
    onChange?.(event, newValue);
    if (replaceUrl) {
      history.replace(`${pathname}?${qs.stringify({ tab: newValue })}`);
    }
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        {...rest}
        onChange={onChangeHandler}
        classes={{
          ...rest.classes,
          root: 'ui-tabs',
        }}
        sx={{
          '& .MuiTabs-indicator': {
            height: '100%',
            backgroundColor: '#fff',
            zIndex: '0',
            border: '1px solid #F0F0F0',
            borderRadius: '10px 10px 0 0',
            borderBottom: 'none',
          },
        }}
      >
        {tabs.map((tab, index) => {
          if (tab.notVisible) return <></>;

          return (
            <Tab
              key={index}
              value={tab.tab}
              label={tab.label}
              classes={{
                root: 'ui-tabs__tab',
              }}
              sx={{
                font: '1.6rem Manrope-Medium',
                color: '#000 !important',
                textTransform: 'none',
                zIndex: '1',
                '&.Mui-selected': {
                  '&::after': {
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'red',
                  },
                },
              }}
            />
          );
        })}
      </Tabs>
      {tabs.map((tab, index) => {
        if (tab.notVisible) return <></>;

        return (
          <TabPanel value={tab.tab} activeValue={activeTab} key={index}>
            {tab.component}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default UITabs;
