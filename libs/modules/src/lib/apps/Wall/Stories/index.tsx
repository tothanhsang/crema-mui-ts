import React from 'react';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';
import StoriesItem from './StoriesItem';
import { useIntl } from 'react-intl';
import { Box } from '@mui/material';
import { StoriesDataType } from '@crema/models/apps/Wall';

type Props = {
  stories: StoriesDataType[];
};

const Stories = ({ stories }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.stories'] as string}
      action={messages['common.viewAll'] as string}
    >
      <Box
        sx={{
          display: 'flex',
          marginLeft: -1.25,
          marginRight: -1.25,
        }}
      >
        {stories.map((data) => (
          <Box
            key={data.id}
            sx={{
              width: '50%',
              paddingLeft: 1.25,
              paddingRight: 1.25,
            }}
          >
            <StoriesItem data={data} />
          </Box>
        ))}
      </Box>
    </AppCard>
  );
};

export default Stories;

Stories.propTypes = {
  stories: PropTypes.array,
};
