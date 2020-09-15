import type { GatsbyNode } from 'gatsby';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  stage,
  actions,
}) => {
  if (stage.startsWith('build')) {
    actions.setBabelPlugin({
      name: 'babel-plugin-polished',
      options: [],
    });
  }
};
