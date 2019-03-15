import { createListRenderer, dotRenderer, renderLast } from '../helpers/actions';
import { subject } from './subject';

const renderList = createListRenderer();
const renderDot = createListRenderer(dotRenderer);


subject.watch({next: renderLast});
subject.watch({next: renderList});
subject.watch({next: renderDot});
