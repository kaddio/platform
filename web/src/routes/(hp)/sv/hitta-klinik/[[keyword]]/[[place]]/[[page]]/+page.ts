
import { loadData } from './load_data.js';
import type { Organization } from './types.ts';


export async function load({params, fetch}) : Promise<{organizations: Organization[], keyword: string}>{
  return loadData({params, fetch});
}