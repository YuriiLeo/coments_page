import project from '../../package.json';

const projectName = project.name ?? 'Project';
// LocalStorage Keys
export const COMMENT_LIST_KEY = `[${projectName}]_comment_list`;
export const COMMENT_DRAFT_KEY = `[${projectName}]_comment_draft`;
