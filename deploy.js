/* eslint-disable no-console */
import { execSync } from 'child_process'

function run(cmd, message = '') {
  if (message) console.log(message)
  console.log(`> ${cmd}`)
  try {
    const output = execSync(cmd, { stdio: 'inherit' })
    return output
  } catch {
    console.error(`Command failed: ${cmd}`)
    process.exit(1)
  }
}

run('npm run build', '🚀 Building project...')
run('git add dist -f', '📂 Adding dist folder to Git...')
run('git commit -m "deploy: dist"', '💬 Committing build...')
run(
  'git subtree split --prefix dist master -b gh-pages-temp',
  '🌿 Creating temporary gh-pages branch...',
)
run(
  'git push origin gh-pages-temp:gh-pages --force',
  '🚀 Pushing to gh-pages branch on remote...',
)
run('git branch -D gh-pages-temp', '🧹 Cleaning up temporary branch...')
run('git reset --hard HEAD~', '🧹 Cleaning up git deploy commit...')

console.log('✅ Deployment complete! Your site should be live on GitHub Pages.')
