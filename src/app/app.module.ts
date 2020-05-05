import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { AuthGuard } from './_guards'
import { Role } from './_models';






import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './Admin/courses/courses.component';
import { CourseInfoComponent } from './Admin/course-info/course-info.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserCoursesComponent } from './Admin/user-courses/user-courses.component';
import { StudentSheetComponent } from './Admin/student-sheet/student-sheet.component';
import { AddCourseGradeComponent } from './Admin/add-course-grade/add-course-grade.component';
import { AddStudentGradeComponent } from './Admin/add-student-grade/add-student-grade.component';
import { AddCourseComponent } from './Admin/add-course/add-course.component';
import { StudentsGradeComponent } from './Admin/students-grade/students-grade.component';
import { UpdateStudentGradeComponent } from './Admin/update-student-grade/update-student-grade.component';
import { UpdateCourseComponent } from './Admin/update-course/update-course.component';
import { DeleteCourseComponent } from './Admin/delete-course/delete-course.component';
import { AddUserCourseComponent } from './Admin/add-user-course/add-user-course.component';
import { DeleteUserCourseComponent } from './Admin/delete-user-course/delete-user-course.component';
import { DeleteUserComponent } from './Admin/delete-user/delete-user.component';
import { UpdateUserComponent } from './Admin/update-user/update-user.component';
import { DeleteCourseGradeComponent } from './Admin/delete-course-grade/delete-course-grade.component';
import { UserProfileComponent } from './Admin/user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';





import { CoursesComponents } from './Student/courses/courses.component';

import { AttendanceComponent } from './Student/attendance/attendance.component';
import { NotificationsComponent } from './Student/notifications/notifications.component';
import { CoursesSingleComponent } from './Student/courses-single/courses-single.component';
import { CoursesInfoComponent } from './Student/courses-info/courses-info.component';
import { GradesComponent } from './Student/grades/grades.component';
import { AssignmentatComponent } from './Student/assignmentat/assignmentat.component';

import { AttendanceSheetStudentComponent } from './Student/attendance-sheet-student/attendance-sheet-student.component';



import { CoursesComponentt } from './Teacher/courses/courses.component';

import { AttendanceComponentt } from './Teacher/attendance/attendance.component';
import { NotificationsComponentt } from './Teacher/notifications/notifications.component';
import { CoursesSingleComponentt } from './Teacher/courses-single/courses-single.component';
import { CoursesInfoComponentt } from './Teacher/courses-info/courses-info.component';
import { GradesComponentt } from './Teacher/grades/grades.component';
import { AssignmentatComponentt } from './Teacher/assignmentat/assignmentat.component';

import { AttendanceSheetStudentComponentt } from './Teacher/attendance-sheet-student/attendance-sheet-student.component';
import { AddTaskComponent } from './Teacher/add-task/add-task.component';
import { DeleteTaskComponent } from './Teacher/delete-task/delete-task.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { JwtInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    CourseInfoComponent,
    ProfileComponent,
    AddUserComponent,
    UsersComponent,
    UserCoursesComponent,
    StudentSheetComponent,
    AddCourseGradeComponent,
    AddStudentGradeComponent,
    AddCourseComponent,
    StudentsGradeComponent,
    UpdateStudentGradeComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    AddUserCourseComponent,
    DeleteUserCourseComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeleteCourseGradeComponent,
    UserProfileComponent,
    NavbarComponent,









    CoursesComponents,

    AttendanceComponent,
    NotificationsComponent,
    CoursesSingleComponent,
    CoursesInfoComponent,
    GradesComponent,
    AssignmentatComponent,
    AttendanceSheetStudentComponent,










    CoursesComponentt,

    AttendanceComponentt,
    NotificationsComponentt,
    CoursesSingleComponentt,
    CoursesInfoComponentt,
    GradesComponentt,
    AssignmentatComponentt,
    AttendanceSheetStudentComponentt,
    AddTaskComponent,
    DeleteTaskComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },


      {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],

      },

      { path: 'login', component: LoginComponent },

      // { path: '**', redirectTo: '' },


      {
        path: 'profile', component: ProfileComponent,
        canActivate: [AuthGuard],

      },

      {
        path: 'courses', component: CoursesComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'courses/add-course', component: AddCourseComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'courses/update-course', component: UpdateCourseComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'courses/delete-course', component: DeleteCourseComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/info/:id', component: CourseInfoComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/students-sheet/:id', component: StudentSheetComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },//--------

      {
        path: 'course/add-course-grade/:id', component: AddCourseGradeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/delete-course-grade/:id', component: DeleteCourseGradeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/students-grades/:id', component: StudentsGradeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/add-student-grade/:id', component: AddStudentGradeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'course/update-student-grade/:id', component: UpdateStudentGradeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },


      {
        path: 'users', component: UsersComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }

      },

      {
        path: 'user/courses/:id', component: UserCoursesComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'user/add-user', component: AddUserComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'user/update-user', component: UpdateUserComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'user/delete-user', component: DeleteUserComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'user/add-delete-course/:id', component: AddUserCourseComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'user/profile/:id', component: UserProfileComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },


      // ------------------------------------------------Student-----------------------------


      {
        path: 'mycourses', component: CoursesComponents,
        canActivate: [AuthGuard],
      },
      {
        path: 'course/home/:id', component: CoursesSingleComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'course/attendance/:id', component: AttendanceComponentt,
        canActivate: [AuthGuard],
      },

      {
        path: 'course/information/:id', component: CoursesInfoComponentt,
        canActivate: [AuthGuard],
      },

      {
        path: 'course/assignments/:id', component: AssignmentatComponentt,
        canActivate: [AuthGuard],
      },

      {
        path: 'course/mygrades/:id', component: GradesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'course/students/grades/:id', component: GradesComponentt,
        canActivate: [AuthGuard],
      },


      { path: 'student/AttendanceSheetStudentComponent', component: AttendanceSheetStudentComponent },


      { path: 'student/notifications', component: NotificationsComponent },
      // ------------------------------------------------Teacher-----------------------------


      // { path: 'teacher/courses', component: CoursesComponentt },

      // { path: 'teacher/attendance', component: AttendanceComponentt },
      // { path: 'teacher/notifications', component: NotificationsComponentt },
      // { path: 'teacher/courses-single', component: CoursesSingleComponentt },
      // { path: 'teacher/courses-info', component: CoursesInfoComponentt },
      // { path: 'teacher/grades', component: GradesComponentt },
      // { path: 'teacher/assignmentat', component: AssignmentatComponentt },

      { path: 'teacher/AttendanceSheetStudentComponent', component: AttendanceSheetStudentComponentt },

      { path: 'teacher/course/add-task', component: AddTaskComponent },
      { path: 'teacher/course/delete-task', component: DeleteTaskComponent },




    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
