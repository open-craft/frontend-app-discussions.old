import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import SearchField from '@edx/paragon/dist/SearchField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SelectableDropdown } from '../../components';
import { AllPostsFilter, MyPostsFilter, TopicsFilter } from '../../data/constants';
import { buildIntlMap } from '../utils';
import messages from './messages';


function SearchFilterBar({ intl }) {
  const myPostsFilterOptions = buildIntlMap(MyPostsFilter, intl, messages);
  const allPostsFilterOptions = buildIntlMap(AllPostsFilter, intl, messages);
  const topicsFilterOptions = buildIntlMap(TopicsFilter, intl, messages);
  return (
    <div className="search-filter-bar d-flex flex-column">
      <div className="d-flex">
        <SelectableDropdown
          defaultOption={MyPostsFilter.MY_POSTS}
          options={myPostsFilterOptions}
        />
        <SelectableDropdown
          defaultOption={AllPostsFilter.ALL_POSTS}
          options={allPostsFilterOptions}
        />
        <SelectableDropdown
          defaultOption={TopicsFilter.ALL}
          options={topicsFilterOptions}
        />
      </div>
      <div className="d-flex">
        <SearchField onSubmit={() => null} />
        <SelectableDropdown
          label={<FontAwesomeIcon icon={faSortAmountDown} />}
          defaultOption={TopicsFilter.ALL}
          options={topicsFilterOptions}
        />
      </div>
    </div>
  );
}

SearchFilterBar.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SearchFilterBar);
