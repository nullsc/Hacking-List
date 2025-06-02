#include <stdio.h>
#include <Windows.h>


// dynamically call API function, runtime dynamic linking

typedef int (__stdcall *MSGBOX)(HWND, LPCWSTR, LPCWSTR, UINT); // define function pointer here

int main(){

	MSGBOX msgbox;
	
	HMODULE loadedlib = LoadLibraryA("User32.dll"); // check ms documentation for function dll
  
	if(loadedlib == NULL){
		//printf("%s", GetLastError());
		printf("Error");
		return 1;
	}
	
	msgbox = (MSGBOX)GetProcAddress(loadedlib, "MessageBoxW");
	
	if(msgbox == NULL){
		printf("Error");
	} else {
		// both work
		msgbox(NULL, L"Test message 1", L"Test", MB_OK);
		(*msgbox)(NULL, L"Test message 2", L"Test", MB_OK);
	}
	
	FreeLibrary(loadedlib);
	
	return 0;
}
