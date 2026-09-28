SELECT e.employee_id, e.name, COUNT(r.reports_to) AS reports_count, ROUND(AVG(r.age)) AS average_age
FROM Employees AS e
JOIN Employees AS r
    ON e.employee_id = r.reports_to
GROUP BY e.employee_id, e.name
ORDER BY e.employee_id