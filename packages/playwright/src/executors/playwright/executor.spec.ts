import executor, {PlaywrightExecutorOptions} from './executor';
import * as devkit from '@nrwl/devkit'

jest.mock('@nrwl/devkit');

const playWrightoptions: PlaywrightExecutorOptions = {
  playwrightConfig: 'apps/my-app-e2e/cypress.json'
};

describe('Build Executor', () => {

  const mockContext = { root: '/root', workspace: { projects: {} } } as any;
  (devkit as any).readTargetOptions = jest.fn().mockReturnValue({
    watch: true,
  });

  it('can run', async () => {
    const output = await executor(playWrightoptions, mockContext);
    expect(output.success).toBe(true);
  });
});
