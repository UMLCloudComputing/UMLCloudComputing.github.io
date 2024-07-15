from umlnow import course, Search, API

def course_info(option, course_id):
    if option == "name":
        message_content = getCourse(course_id)
    elif option == "prereq":
        message_content = getPre(course_id)
    elif option == "credits":
        message_content = getCr(course_id)
    else:
        message_content = "Incorrect option"
    
    return message_content

def getCourse(courseID):
    return course.get_course_name(course.get_html_response(course.get_course_url(courseID)))

def getPre(courseID):
    return course.get_course_requirements_text(course.get_html_response(course.get_course_url(courseID)))

def getCr(courseID):
    dict = course.get_course_credits(course.get_html_response(course.get_course_url(courseID)))
    return f"Credits: {dict['min']}"