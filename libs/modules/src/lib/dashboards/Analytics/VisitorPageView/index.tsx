import React from 'react';
import StatGraphs from './StatGraphs';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import { VisitorsPageViewType } from '@crema/models/dashboards/Analytics';

type VisitorPageViewPorps = {
  data: VisitorsPageViewType[];
};

const VisitorPageView: React.FC<VisitorPageViewPorps> = ({ data }) => {
  const handleSelectionType = (data: any) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.analytics.visitorsPageViews'] as string}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default VisitorPageView;
