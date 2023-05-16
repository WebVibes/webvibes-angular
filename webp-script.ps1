# tip: on windows explorer shift + right-click a directory and copy its path
$dir = "C:\Users\Norbi\Documents\webvibes-angular\src\assets\img"

# get all files in the directory
$images = Get-ChildItem $dir

foreach ($img in $images) {
  # output file will be written in the same directory 
  # but with .webp extension instead of old extension
  $outputName = $img.DirectoryName + "\" + $img.BaseName + ".webp"

  C:\Users\Norbi\Documents\libwebp-1.3.0-windows-x64\bin\cwebp.exe -q 60 $img.FullName -o $outputName
}
