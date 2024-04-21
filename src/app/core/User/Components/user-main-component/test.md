<ng-container *ngIf="isAuthenticated(); else notAuthenticated">
<div class="container mx-auto h-screen flex flex-col justify-center">
    <!-- Header -->
    <app-header-component class="mb-4"></app-header-component>
  
    <!-- Content -->
  
      <!-- Authenticated Layout -->
      <div class="flex flex-row justify-between">
        <!-- Sidebar -->
      
  
        <!-- Main Content -->
        <main class="flex-1 p-4 ms-16">
          
        </main>
      </div>
    </div>
    </ng-container>



    <ng-template #notAuthenticated>
      <app-header-component class="mb-4"></app-header-component>
        <router-outlet></router-outlet>
    </ng-template>
 

  
<!-- <app-footer-component></app-footer-component> -->



<div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
  <!-- fixed-width -->
  <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
      <div class="sticky top-0 p-4 w-full h-full">
        <app-user-sidebar class="flex-shrink-0 mr-4"></app-user-sidebar>
      </div>
  </div>
  <main role="main" class="w-full flex-grow pt-1 px-3">
    <router-outlet></router-outlet>
  </main>
  <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
      <!-- fixed-width -->
      <div class="flex sm:flex-col px-2">
          <!-- sidebar goes here -->
      </div>
  </div>
</div>
<footer class="bg-black mt-auto">
  ...
</footer>









<ng-container *ngIf="isAuthenticated(); else notAuthenticated">
<div class="container mx-auto h-screen flex flex-col justify-center">
    <!-- Header -->
    <app-header-component class="mb-4"></app-header-component>
  
    <!-- Content -->
  
      <!-- Authenticated Layout -->
      <div class="flex flex-row justify-between">
        <!-- Sidebar -->
        <app-user-sidebar class="flex-shrink-0 mr-4"></app-user-sidebar>
  
        <!-- Main Content -->
        <main class="flex-1 p-4 ms-16">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
    </ng-container>


    
    <ng-template #notAuthenticated>
      <app-header-component class="mb-4"></app-header-component>
        <router-outlet></router-outlet>
    </ng-template>
 















  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col-reverse md:flex-row">
    <router-outlet></router-outlet>
    </div>
    </div>
    


  <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
      <!-- fixed-width -->
      <div class="flex sm:flex-col px-2">
        <div class="flex sm:flex-col px-2">
          <div class="bg-gray-50 rounded-xl border mb-3 w-full">
              <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span class="block text-indigo-600">Made with Tailwind CSS!</span>
                  </h2>
              </div>
          </div>
          <div class="p-2"><!--spacer--></div>
          <div class="bg-gray-100 rounded-xl mb-3 w-full">
              <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span class="block">Ready to dive in?</span>
                  </h2>
              </div>
          </div>
          <div class="p-2"><!--spacer--></div>
          <div class="bg-gray-50 rounded-xl border mb-3 w-full">
              <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span class="block text-indigo-600">Play free at Codeply today.</span>
                  </h2>
              </div>
          </div>
      </div>
      </div>
  </div>

















  <ng-container *ngIf="isAuthenticated(); else notAuthenticated">
<div class="container mx-auto h-screen flex flex-col justify-center">
    <!-- Header -->
    <app-header-component class="mb-4"></app-header-component>
  
    <!-- Content -->
  
      <!-- Authenticated Layout -->
      <div class="flex flex-row justify-between">
        <!-- Sidebar -->
        <app-user-sidebar class="flex-shrink-0 mr-4"></app-user-sidebar>
  
        <!-- Main Content -->
        <main class="flex-1 p-4 ms-16">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
    </ng-container>
    <ng-template #notAuthenticated>
      <app-header-component class="mb-4"></app-header-component>
        <router-outlet></router-outlet>
    </ng-template>
 
<!-- https://play.tailwindcss.com/y4NdL5RdBl -->
  
<!-- <app-footer-component></app-footer-component> -->

