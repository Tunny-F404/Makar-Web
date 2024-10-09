# Lab Instructions: Advanced JS Features
 
> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
> - Questions about using VSCode? Please see our support resources here:  
> [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **To run your JavaScript code**
> - Select your JavaScript file
> - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
> Ex: It looks like a triangular "Play" button. <br><br>

<br>


## Task: Iterate Over an Array

In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.  
<br><br>
**Step 1.** You are given an array of dairy products:  

    
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    


Create a function called `logDairy`. Within it, console log each of the items in the dairy array, using the for...of loop.   

After you create this function, call it as `logDairy()` to see the output on the console.

The expected output should be:

```
cheese
sour cream
milk
yogurt
ice cream
milkshake
```

<br>
<b>Step 2.</b> You are given the following starter code:  

```
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
```

Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as `birdCan()` to see the output on the console.
Remember, you need to console log both the key and the value of each of the bird object's properties.

<br/>
Expected output should be:

```
canFly: true
hasFeathers: true
```


<br>
<b>Step 3.</b> 
    Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.

<br/><br/>
Expected outout should be:

```
canFly: true
hasFeathers: true
canJump: true
```
<br><br>
## Final Step: Let's submit your code!
Nice work! To complete this assessment:
- Save your file through File -> Save 
- Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 

# 实验说明：高级 JS 功能



> ### **提示：开始之前**

> #### **要并排查看代码和说明**，请在 VSCode 工具栏中选择以下内容：

> - 查看 -> 编辑器布局 -> 两列

> - 要在预览模式下查看此文件，请右键单击此 README.md 文件并选择“打开预览”

> - 在代码树中选择您的代码文件，它将在新的 VSCode 选项卡中打开它。

> - 将您的评估代码文件拖到第二列。

> - 做得好！您现在可以同时查看说明和代码。

> - 有关于使用 VSCode 的问题？请参阅此处的支持资源：

> [Coursera 上的 Visual Studio Code](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)

> #### **运行您的 JavaScript 代码**

> - 选择您的 JavaScript 文件

> - 选择 V​​SCode 右上角工具栏中的“运行代码”按钮。

> 例如：它看起来像一个三角形的“播放”按钮。










## 任务：遍历数组



在此练习中，您将使用 for....of 循环遍历数组并遍历对象自己的属性。





**步骤 1.** 您将获得一个乳制品数组：



var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']



创建一个名为 `logDairy` 的函数。在其中，使用 for...of 循环在控制台中记录乳制品数组中的每个项目。



创建此函数后，将其调用为 `logDairy()` 以查看控制台上的输出。



预期输出应为：



```

cheese

sour cream

milk

yogurt

ice cream

milkshake

```






步骤 2. 您将获得以下起始代码：



```

const animal = {



canJump: true



};



const bird = Object.create(animal);



bird.canFly = true;



bird.hasFeathers = true;

```



创建一个名为 `birdCan` 的函数，在其中循环遍历 bird 对象的属性，并使用 for...of 循环在控制台上记录每个属性。最后将该函数调用为 `birdCan()` 以查看控制台上的输出。

请记住，您需要在控制台上记录 bird 对象每个属性的键和值。






预期输出应为：



```

canFly: true

hasFeathers: true

```






步骤 3。

使用与任务 2 中相同的起始代码，创建一个名为 `animalCan` 的函数，并在其中使用 for...in 循环循环遍历 bird 对象及其原型（animal 对象）中的所有属性。最后将该函数调用为 `animalCan()` 以查看控制台上的输出。







预期结果应为：



```

canFly：true

hasFeathers：true

canJump：true

```





## 最后一步：让我们提交您的代码吧！

干得好！要完成此评估：

- 通过“文件”->“保存”保存您的文件

- 在实验室工具栏中选择“提交作业”。



您的代码将自动评分，并在“成绩”选项卡上立即返回反馈。

您还可以在编程作业“我的提交”选项卡中查看您的分数。



