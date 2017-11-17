# Getting Started

There's a few easy things you have to do to get started on your child module.

1. Go to the [Github repository for the child template](https://github.com/byuitechops/child-template).

2. Download the repository **as a zip file** by pressing the "Clone or Download" button (or just click [this](https://github.com/byuitechops/child-template/archive/master.zip)).

3. Unzip it to where you want your child module repository to live on your computer.

4. Navigate to the unzipped child module repository in the console.

5. Run `npm install`.

6. After its done, Run `npm start -- update d2l`. It downloads the current D2L gauntlet courses to your child module. You'll use this command to update them as needed. They are ignored by git.

7. Open `package.json` in your editor. Change fields as needed (i.e. "name" should be the name of your child module).

8. Go to [Github](https://github.com/byuitechops) and create a new repository. Name it whatever you named your child module in it's `package.json`. Use all lower-case letters separated by hyphens (ex. "d2l-pages-search").

9. Open `.gitignore` in your editor and add `documentation/` and `CLI/` to the list.

10. Follow the instructions listed in the new repository on Github to push your child module to it.

11. Open `main.js` in your editor and go ham. `main.js` is where your child module code will live.

**Note:** You should go over the `commands.md` document inside the documentation folder in the project. It contains commands useful for development.
